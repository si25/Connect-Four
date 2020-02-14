class Player {
	constructor(name, id, color, active = false){
		this.name = name;
		this.id = id;
		this.color = color;
		this.active = active;
		this.tokens = this.createTokens(21); 
	}


	/**
	* Creares token objects for player
	* @param {integer} num - Number of token objects to be crearted
	*/ 


	createTokens(num) {
		const tokens = [];

		for (let i = 0; i < num; i++) {
			let token = new Token(i, this);
			tokens.push(token);
		}

		return tokens; 

	}

	get unusedToken() {
		return this.tokens.filter(token => !token.dropped);
	}

	get activeToken(){
		return this.unusedToken[0];
	}

		/**
	 * Check if a player has any undropped tokens left
	 * @return {Boolean} 
	 */
	checkTokens(){
		return this.unusedToken.length == 0 ? false : true; 
	}

}