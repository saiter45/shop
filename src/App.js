import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Items from './components/items'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Куртка серая',
          img: 'grey-jacket.jpg',
          desc: 'Lorem',
          category: 'winter',
          price: '29.99'
        },
        {
          id: 2,
          title: 'Куртка синяя',
          img: 'blue-jacket.png',
          desc: 'Lorem',
          category: 'winter',
          price: '25.99'
        },
        {
          id: 3,
          title: 'Штаны серые',
          img: 'grey-trousers.webp',
          desc: 'Lorem',
          category: 'pants',
          price: '19.50'
        },
        {
          id: 4,
          title: 'Ботинки черные',
          img: 'black-boots.jpg',
          desc: 'Lorem',
          category: 'shoes',
          price: '14.99'
        }
      ]
    }
  }
  render(){
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />        
      </div>
    )
  }
}

export default App;
