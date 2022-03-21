import './App.css';

import Sidebar from "./components/Sidebar/Sidebar"
import Topbar from "./components/Topbar/Topbar"
import Pageheading from "./components/Pageheading/Pageheading"
import Rowdata from "./components/Rowdata/Rowdata"
import Rowdb from "./components/Rowdb/Rowdb"
import Footer from "./components/Footer/Footer"
import Cardfila from "./components/CardFila/Cardfila"


function App() {
  let cards = [
		{
			imagen: "/assets/characters/ahsoka.jpg",
			nombre: "Ashoka",
			descripcion: "Star wars",
		},
		{
			imagen: "/assets/characters/anakin.jpg" ,
			nombre:"Anakin" ,
			descripcion:"Star wars" ,
		},
		{
			imagen:"/assets/characters/batman.jpg" ,
			nombre:"Batman" ,
			descripcion:"Personaje de DC" ,
		},
		{
			imagen:"/assets/characters/capAmerica.jpg" ,
			nombre: "Capitán America",
			descripcion:"Personaje de Marvel" ,
		},
		{
			imagen:"/assets/characters/cell.jpg" ,
			nombre: "Cell",
			descripcion:"Dragon Ball" ,
		},
		{
			imagen:"/assets/characters/hulkSmall.jpg" ,
			nombre: "Hulk" ,
			descripcion: "Personaje de Marvel" ,
		},
		{
			imagen:"/assets/characters/kyloRen.jpg" ,
			nombre:"Kylo Ren" ,
			descripcion:"Star wars" ,
		},
		{
			imagen:"/assets/characters/luke.jpg" ,
			nombre: "Luke Skywalker",
			descripcion: "Star wars",
		},
		{
			imagen:"/assets/characters/obiWan.jpg" ,
			nombre:"Obi Wan Kenobi" ,
			descripcion:"Star wars" ,
		},
		{
			imagen:"/assets/characters/strange.jpg" ,
			nombre:"Doctor Strange" ,
			descripcion: "Personaje de Marvel" ,
		},
		{
			imagen:"/assets/characters/superman.jpg" ,
			nombre: "Superman",
			descripcion:"Personaje de DC" ,
		},
		{
			imagen:"/assets/characters/vegetta.jpg" ,
			nombre:"Vegetta" ,
			descripcion: "Dragon Ball",
		},
		{
			imagen:"/assets/characters/yoda.jpg" ,
			nombre: "Yoda",
			descripcion: "Star Wars",
		}
		
  ];
  
	let menuItems = [
		{
			name: "Pages",
			icon: "fas fa-fw fa-folder"
		},
		{
			name: "Charts",
			icon: "fas fa-fw fa-chart-area"			
		},
		{
			name: "Tables",
			icon: "fas fa-fw fa-table"
		}
  ];
  let categorias = [
		{
			categoria: "Categoria 01"
		},
		{
			categoria: "Categoria 02"
		},
		{
			categoria: "Categoria 03"
		},
		{
			categoria: "Categoria 04"
		},
		{
			categoria: "Categoria 05"
		},
		{
			categoria: "Categoria 06"
		}
  ];
  let dataCards = [
		{
			titulo: "Products in Data Base",
			dato: "135",
			icon: "fas fa-clipboard-list fa-2x text-gray-300",
			color: "card border-left-primary shadow h-100 py-2",
			colorText: "text-xs font-weight-bold text-primary text-uppercase mb-1",
		},
		{
			titulo: "Amount in products",
			dato: "$546.456",
			icon: "fas fa-dollar-sign fa-2x text-gray-300",
			color: "card border-left-success shadow h-100 py-2" ,
			colorText: "text-xs font-weight-bold text-success text-uppercase mb-1",
		},
		{
			titulo: "Users quantity",
			dato: "38",
			icon: "fas fa-user-check fa-2x text-gray-300",
			color: "card border-left-warning shadow h-100 py-2",
			colorText: "text-xs font-weight-bold text-warning text-uppercase mb-1",
		}
	]
  return (
    <div id="wrapper">
      <Sidebar menuItems = {menuItems}/>
      <div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
        <Topbar/>
        <div className="container-fluid">
        <Pageheading/>
        <Rowdata dataCards = {dataCards}/>
        <Rowdb categorias = {categorias}/>
        <Cardfila cards = {cards}/>
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
