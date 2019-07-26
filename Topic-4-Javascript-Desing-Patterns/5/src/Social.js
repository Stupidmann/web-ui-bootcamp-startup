const Social = {
    
    share (friendName) {
        console.log (`${friendName} shares ${this.title} with you`);
    },
    like (friendName) {
        console.log (`${friendName} likes ${this.title}`);
    }
}

export default Social;