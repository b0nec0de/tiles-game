let tiles = [];

compareArrayElements() {
   return  Math.random() - 0.5;
}
//делаем новый массив 16 из начального 8 
combineContent() {
   let initialContent = this.state.dataBase,
       doubleInitialContent = initialContent.concat(initialContent),
       resultContent = doubleInitialContent.sort(() => Math.random() - 0.5);
         return resultContent;
}
//возвращаем массив компонентов Tile
getContent() {
   const rawArray = this.combineContent();
   const mappedArray = rawArray.map(tile => (
            <Tile 
               key={Math.random()}
               name={tile.name}
               back={tile.src}
               callback={this.openTile} 
            />	
         ));
   	
         return mappedArray; 
}
