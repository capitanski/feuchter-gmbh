new Proxy({"src":"/custom-folder/Staubhaube Farbig.Emj4ERTI.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Staubhaube Farbig.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/custom-folder/Thermohaube farbig.Bqfd-0g0.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Thermohaube farbig.jpg";
							}
							
							return target[name];
						}
					});
