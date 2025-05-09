const Transportloesungen = new Proxy({"src":"/custom-folder/schutzwand_schraeg_header.D1wLB0TD.jpg","width":3000,"height":3000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Produkte/schutzwand_schraeg_header.jpg";
							}
							
							return target[name];
						}
					});

const Thermohaube = new Proxy({"src":"/custom-folder/thermohaube_schraeg_header.BUMzkCLK.jpg","width":3000,"height":3000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Produkte/thermohaube_schraeg_header.jpg";
							}
							
							return target[name];
						}
					});

const Staubhaube = new Proxy({"src":"/custom-folder/staubhaube_schraeg_header.CTJrcUVz.jpg","width":3000,"height":3000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Produkte/staubhaube_schraeg_header.jpg";
							}
							
							return target[name];
						}
					});

export { Staubhaube as S, Transportloesungen as T, Thermohaube as a };
