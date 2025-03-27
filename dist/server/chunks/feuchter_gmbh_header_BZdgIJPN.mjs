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

export { Scribble as S };
