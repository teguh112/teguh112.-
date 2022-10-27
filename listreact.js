const Card = (props) =>{
  return (
    <div class="card">
      <p class="title">{props.name}</p>
      <p>{props.job}</p>
      </div>
    ) 
      
  }
const App=()=>{
 return (
   <div>
   <Card name="Abdurrahim Mahbub" job="Pembayaran Bank BNI"/> 
   <Card name="Husein Haikal" job="Pembayaran OVO"/>
   <Card name="Abraham Mobil" job="Pembayaran Gopay"/>
   </div>
   
 ) 
}
ReactDOM.render(<App/>,document.querySelector('#root')) 