const Transportloesungen = new Proxy({"src":"/custom-folder/schutzwand_schraeg_header.BM-bQp7Q.webp","width":3000,"height":3000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/schutzwand_schraeg_header.webp";
							}
							
							return target[name];
						}
					});

const Thermohaube = new Proxy({"src":"/custom-folder/thermohaube_schraeg_header.BYwx57UQ.webp","width":3000,"height":3000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/thermohaube_schraeg_header.webp";
							}
							
							return target[name];
						}
					});

const Staubhaube = new Proxy({"src":"/custom-folder/staubhaube_schraeg_header.9HbzUfoQ.webp","width":3000,"height":3000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/staubhaube_schraeg_header.webp";
							}
							
							return target[name];
						}
					});

export { Staubhaube as S, Transportloesungen as T, Thermohaube as a };
