/ INFRASTRUCTURE-College_and_hostel
app.intent("INFRASTRUCTURE-College_and_hostel", conv=> {
	const rp = gallery.getData();
	return rp.then(result => {
			conv.ask("Here is the gallery : ");
			let list = {};
			x = 1;
			for(i in result) {
				list[x] = {
					title : x,
					image : new Image({
						url : result[i].imageUrl,
						alt : x
					})
				}
				x = x+1;
			}
			conv.ask(new Carousel({
				title : "",
				items : list
			}));
			conv.ask(new Suggestions("Start Over"));
			conv.ask(new Suggestions("Others"));
		}).
		catch(err => console.log(err));

})