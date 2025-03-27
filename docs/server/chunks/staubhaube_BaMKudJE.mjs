const Transportloesungen = new Proxy({"src":"/custom-folder/transportloesungen.Drj6yWaY.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/transportloesungen.jpg";
							}
							
							return target[name];
						}
					});

const Thermohaube = new Proxy({"src":"/custom-folder/thermohaube.C9CYxG_D.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/thermohaube.jpg";
							}
							
							return target[name];
						}
					});

const Staubhaube = new Proxy({"src":"/custom-folder/staubhaube.Ci7iOeyi.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/staubhaube.jpg";
							}
							
							return target[name];
						}
					});

export { Staubhaube as S, Transportloesungen as T, Thermohaube as a };
