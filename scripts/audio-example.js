require([
  '$api/models',
  '$api/audio'
], function(models, audio) {
  'use strict';

  var startFFT = function() {  
	var analyzer = audio.RealtimeAnalyzer.forPlayer(models.player);
	analyzer.addEventListener('audio', function(data){
		var pjs = Processing.getInstanceById('pjs');

		// if there are more bands then the sketch wants, we have to scale the array
		// to do this, we average a number of bands together in a single band
		if(data.audio.spectrum.left.length > pjs.numberOfBands){
 			var bandsPerScaledBand = Math.floor(data.audio.spectrum.left.length / pjs.numberOfBands);
			var scaledSpectrum = [];
			for(var i = 0; i < pjs.numberOfBands; i++){
				var band = 0.;
				for(var j = 0; j < bandsPerScaledBand; j++){
					band += data.audio.spectrum.left[(i * bandsPerScaledBand) + j];
				}
				scaledSpectrum[i] = band / bandsPerScaledBand;
			}
			pjs.updateData(scaledSpectrum);
		}

		else {
			pjs.updateData(data.audio.spectrum.left);
		}
	});
};

  exports.startFFT = startFFT;
});
