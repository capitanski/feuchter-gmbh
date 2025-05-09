new Proxy({"src":"/custom-folder/schutzwand_schraeg.D7efcrPx.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Produkte/schutzwand_schraeg.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/custom-folder/schutzwand_front.C_V45FWn.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Produkte/schutzwand_front.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/custom-folder/schutzwand_verschluss.D91v6whb.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Produkte/schutzwand_verschluss.jpg";
							}
							
							return target[name];
						}
					});
