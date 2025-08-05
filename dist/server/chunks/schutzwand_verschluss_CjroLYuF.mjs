new Proxy({"src":"/custom-folder/schutzwand_schraeg.dPFV0xjE.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/schutzwand_schraeg.webp";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/custom-folder/schutzwand_front.BObemgYk.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/schutzwand_front.webp";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/custom-folder/schutzwand_verschluss.kiLo50Db.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/schutzwand_verschluss.webp";
							}
							
							return target[name];
						}
					});
