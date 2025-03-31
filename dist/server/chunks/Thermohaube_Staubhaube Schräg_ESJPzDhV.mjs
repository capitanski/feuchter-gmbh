const Staubhaube = new Proxy({"src":"/custom-folder/Thermohaube_Staubhaube Schräg.LP_BA3QO.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Thermohaube_Staubhaube Schräg.jpg";
							}
							
							return target[name];
						}
					});

export { Staubhaube as S };
