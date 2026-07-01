document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-busq');
    const input = document.getElementById('entrada-busq');
    const container = document.getElementById('cont-resultados');

    let allDevices = [];

    // Cargar todas las bases de datos JSON de la carpeta data/
    const jsonFiles = [
        { path: 'data/iphone.json', brand: 'Apple' },
        { path: 'data/samsung.json', brand: 'Samsung' },
        { path: 'data/motorola.json', brand: 'Motorola' },
        { path: 'data/xiaomi.json', brand: 'Xiaomi' }
    ];

    Promise.all(
        jsonFiles.map(file => 
            fetch(file.path)
                .then(res => {
                    if (!res.ok) throw new Error(`No se pudo cargar ${file.path}`);
                    return res.json();
                })
                .then(data => {
                    // Obtener la lista de modelos del JSON
                    let modelsList = [];
                    if (data.modelos) {
                        modelsList = data.modelos;
                    } else if (data.repuestos) {
                        modelsList = data.repuestos;
                    }

                    modelsList.forEach(m => {
                        const device = {
                            marca: m.marca || data.marca || file.brand,
                            modelo: m.modelo,
                            familia: m.familia || '',
                            opciones: []
                        };

                        // Extraer opciones de pantalla según el formato del JSON
                        if (m.tiposPantalla && Array.isArray(m.tiposPantalla)) {
                            // Formato de iPhone (array)
                            m.tiposPantalla.forEach(p => {
                                device.opciones.push({
                                    tipo: p.tipo,
                                    precio: p.precio,
                                    garantia: p.garantia
                                });
                            });
                        } else if (m.pantallas) {
                            // Formato de Samsung/Motorola/Xiaomi (objeto con estandar/premium)
                            if (m.pantallas.estandar) {
                                device.opciones.push({
                                    tipo: 'Repuesto Estándar',
                                    precio: m.pantallas.estandar.precio,
                                    garantia: m.pantallas.estandar.garantia
                                });
                            }
                            if (m.pantallas.premium) {
                                device.opciones.push({
                                    tipo: 'Calidad Premium / Original',
                                    precio: m.pantallas.premium.precio,
                                    garantia: m.pantallas.premium.garantia
                                });
                            }
                        }

                        if (device.opciones.length > 0) {
                            allDevices.push(device);
                        }
                    });
                })
                .catch(err => console.error("Error cargando base de datos:", err))
        )
    ).then(() => {
        console.log('Catálogo cargado con éxito. Total de dispositivos:', allDevices.length);
    });

    // Evento de búsqueda
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        performSearch();
    });

    input.addEventListener('input', () => {
        // Búsqueda en tiempo real opcional
        if (input.value.trim().length >= 2) {
            performSearch();
        } else if (input.value.trim().length === 0) {
            container.innerHTML = `<p class="estado-vacio">Ingresa un modelo para ver precios y opciones.</p>`;
        }
    });

    function performSearch() {
        const query = input.value.trim().toLowerCase();
        if (!query) {
            container.innerHTML = `<p class="estado-vacio">Ingresa un modelo para ver precios y opciones.</p>`;
            return;
        }

        // Separamos la búsqueda en palabras clave para una búsqueda inteligente multi-término
        const keywords = query.split(/\s+/).filter(k => k.length > 0);

        // Filtrar dispositivos
        const results = allDevices.filter(d => {
            const marca = d.marca.toLowerCase();
            const modelo = d.modelo.toLowerCase();
            const familia = d.familia.toLowerCase();
            const textToSearch = `${marca} ${familia} ${modelo}`;

            // Cada palabra de la búsqueda debe estar presente en el nombre del dispositivo
            return keywords.every(kw => textToSearch.includes(kw));
        });

        renderResults(results);
    }

    function renderResults(results) {
        container.innerHTML = '';

        if (results.length === 0) {
            container.innerHTML = `
                <div class="estado-vacio">
                    <p>No encontramos repuestos cargados para ese modelo en nuestra web.</p>
                    <p style="font-size: 0.95rem; margin-top: 0.5rem; color: var(--color-texto-secundario);">
                        ¡No te preocupes! Podemos conseguirlo. Escríbenos por WhatsApp y te lo presupuestamos al instante.
                    </p>
                    <a href="https://wa.me/543764888093?text=Hola,%20no%20encontré%20el%20modelo%20de%20mi%20celular%20en%20el%20catálogo.%20¿Tienen%20reparación%20para..." 
                       target="_blank" rel="noopener noreferrer" class="btn-presupuesto" style="display: inline-block; margin-top: 1rem;">
                       Consultar por WhatsApp
                    </a>
                </div>
            `;
            return;
        }

        results.forEach(d => {
            const item = document.createElement('div');
            item.className = `resultado-item marca-${d.marca.toLowerCase()}`;
            
            let opcionesHTML = '';
            d.opciones.forEach(opt => {
                const formattedPrice = new Intl.NumberFormat('es-AR', { 
                    style: 'currency', 
                    currency: 'ARS', 
                    maximumFractionDigits: 0 
                }).format(opt.precio);

                const esPremium = opt.tipo.toLowerCase().includes('premium') || opt.tipo.toLowerCase().includes('original') || opt.tipo.toLowerCase().includes('oled');
                const badgeClass = esPremium ? 'badge-premium' : 'badge-estandar';

                opcionesHTML += `
                    <div class="opcion-repuesto">
                        <span class="opcion-badge ${badgeClass}">${opt.tipo}</span>
                        <span class="opcion-precio">${formattedPrice}</span>
                    </div>
                `;
            });

            // Mensaje personalizado para WhatsApp
            const waText = encodeURIComponent(`Hola CoriTech! Quisiera consultar por el cambio de módulo de mi ${d.marca} ${d.modelo}.`);
            const waLink = `https://wa.me/543764888093?text=${waText}`;

            item.innerHTML = `
                <div class="resultado-info">
                    <span class="badge-marca brand-${d.marca.toLowerCase()}">${d.marca}</span>
                    <h3 class="resultado-modelo">${d.modelo} ${d.familia ? `<span class="resultado-familia">${d.familia}</span>` : ''}</h3>
                </div>
                <div class="resultado-opciones">
                    ${opcionesHTML}
                </div>
                <div class="resultado-footer">
                    <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-cotizar">
                        Consultar
                    </a>
                </div>
            `;
            container.appendChild(item);
        });

        // Ejecutar animación de entrada
        if (typeof window.animateNewResults === 'function') {
            window.animateNewResults();
        }
    }
});
