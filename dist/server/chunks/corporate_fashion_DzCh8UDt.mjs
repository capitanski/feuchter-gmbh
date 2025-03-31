const Scribble = new Proxy({"src":"/custom-folder/feuchter_gmbh_header.Cq--DDfa.jpg","width":1400,"height":933,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/feuchter_gmbh_header.jpg";
							}
							
							return target[name];
						}
					});

const Behoerdenkleidung = new Proxy({"src":"/custom-folder/officialwear_header.B3vUiA31.jpg","width":3500,"height":2333,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/officialwear_header.jpg";
							}
							
							return target[name];
						}
					});

const Corporate = new Proxy({"src":"/custom-folder/corporate_fashion.CnWaj1Y1.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/corporate_fashion.jpg";
							}
							
							return target[name];
						}
					});

export { Behoerdenkleidung as B, Corporate as C, Scribble as S };
