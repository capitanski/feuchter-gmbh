const Transportloesungen = new Proxy({"src":"/custom-folder/schutzwand_grid.BXYe42tP.webp","width":3000,"height":3000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/schutzwand_grid.webp";
							}
							
							return target[name];
						}
					});

const Thermohaube = new Proxy({"src":"/custom-folder/thermohaube_grid.Df-aPUrW.webp","width":3000,"height":3000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/thermohaube_grid.webp";
							}
							
							return target[name];
						}
					});

const Staubhaube = new Proxy({"src":"/custom-folder/staubhaube_grid.Buvw9wOb.webp","width":3000,"height":3000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/staubhaube_grid.webp";
							}
							
							return target[name];
						}
					});

export { Staubhaube as S, Transportloesungen as T, Thermohaube as a };
