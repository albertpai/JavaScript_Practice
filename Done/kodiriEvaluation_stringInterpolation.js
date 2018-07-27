function hello(user) {
	return `Hello, ${this.name}`
}

console.log({user: 'Peter'})