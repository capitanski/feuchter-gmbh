const Bekleidung = new Proxy({"src":"/custom-folder/Military Square.D7Dm4JcL.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Military Square.webp";
							}
							
							return target[name];
						}
					});

const Behoerdenkleidung = new Proxy({"src":"/custom-folder/officialwear.B7lak7XA.webp","width":2333,"height":2333,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/officialwear.webp";
							}
							
							return target[name];
						}
					});

const Corporate = new Proxy({"src":"/custom-folder/Corporate Fashion.BH4MCTWd.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Corporate Fashion.webp";
							}
							
							return target[name];
						}
					});

export { Bekleidung as B, Corporate as C, Behoerdenkleidung as a };
