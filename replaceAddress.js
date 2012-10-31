/**************************************************************

	Script		: ReplaceAddress
	Version		: .5
	Authors		: Stephen M James (http://InteractiveLlama.com)
	Desc		: Javascript email obfuscation
	Licence		: Open Source MIT Licence

**************************************************************/
ReplaceAddress = function() {
	var replace = function(newAddress) {
		if (document.getElementById) {
			element = document.getElementById(newAddress.id);
			if (typeof(element) != 'undefined' && element != null) {
				newId = (newAddress.id.split('-'))[1];
				if (newId !== newAddress.id) {
					newAddress.id = newId;
				}
				element.innerHTML = '<a id="' + newAddress.id + '" href="' + 'mai' + 'lto:' + newAddress.address.reverse().join('') + '">' + newAddress.linktext.join('') + '</a>';
			}
		} // if
	};
	return { // public methods
		add: function(newAddress) {
			if (newAddress instanceof Array) {
				for (var i = 0, max = newAddress.length; i < max; i++) {
					replace(newAddress[i]);
				}
			} else {
				replace(newAddress);
			}
		}
	};
}(); 

/* ReplaceAddress: Specify an object or array of objects in order to 
replace element with stated id with 'mailto:' link. 
If hyphen is in element id, then split and make second half of id
the new id. The address array is REVERSED. */
var addressList = [{
	id: 'replaceText-mail1',
	address: ['com', '.', 'domain', '@', 'account'],
	linktext: ['email me']
},
{
	id: 'replaceText-mail2',
	address: ['com', '.', 'domain2', '@', 'account'],
	linktext: ['email me2']
}];

ReplaceAddress.add(addressList);
