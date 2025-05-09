new Proxy({"src":"/custom-folder/Transportwand farbig.C-dn7r1x.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Produkte/Transportwand farbig.jpg";
							}
							
							return target[name];
						}
					});
