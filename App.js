
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import BannerMovies from './src/components/bannerFilmes';
import CardMovies from './src/components/cardFilmes';
import Header from './src/components/header';
import SearchBar from './src/components/searchbar';
import Filmes from './src/data/movies'

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>

     <SearchBar></SearchBar>

     <BannerMovies></BannerMovies>
     
    
    <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={Filmes}
    keyExtractor ={ (item)=> item.id}
    renderItem = {({item}) => (
  
      <CardMovies titulo = {item.nome} nota = {item.nota} imagem = { item.imagem} ></CardMovies>
  
  )}

    />
  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center",
    
    
  },
});
