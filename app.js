// your code here!
$(document).ready(function(){
	$('.js-text-analyze').submit(function(event){
		event.preventDefault();
		var text=$('.js-text-analyze textarea').val().trim();
		console.log(text);
		var words=text.replace(/[^a-zA-z0-9'\- ]/g, '').split(' ');
		console.log(words);
		var sentences=text.split('\n');
		console.log(sentences.length);
		$('.js-results').removeClass('hidden');
		$('.js-word-count').text(''+words.length);
		$('.js-unique-word-count').text(''+calculateUniqueElements(words));
		$('.js-avg-word-length').text(''+(Math.round(calculateAverageCharacters(words)*100))/100+' characters');
		$('.js-avg-sentence-length').text(''+(Math.round(calculateAverageCharacters(sentences)*100))/100+' characters');
	});

	function calculateAverageCharacters(input){
		var totalLength=0;

		for(var i=0; i<input.length; i++){
			totalLength+=input[i].length;
		}
		
		return (totalLength/input.length);
	}

	function calculateUniqueElements(input){
		var uniqueElements=[];

		for(var i=0; i<input.length; i++){
			if(uniqueElements.find(function(element){
				return element === input[i];
			}))
				continue;
			else
				uniqueElements.push(input[i]);
		}

		return uniqueElements.length;
	}
});




