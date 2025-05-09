const Bekleidung = new Proxy({"src":"/custom-folder/Military Square.CO6N8qOp.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Military Square.jpg";
							}
							
							return target[name];
						}
					});

const Behoerdenkleidung = new Proxy({"src":"/custom-folder/officialwear.CXzXds7u.jpg","width":2333,"height":2333,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/officialwear.jpg";
							}
							
							return target[name];
						}
					});

const Corporate = new Proxy({"src":"/custom-folder/Corporate Fashion.g8TzBjDW.jpg","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Corporate Fashion.jpg";
							}
							
							return target[name];
						}
					});

export { Bekleidung as B, Corporate as C, Behoerdenkleidung as a };
