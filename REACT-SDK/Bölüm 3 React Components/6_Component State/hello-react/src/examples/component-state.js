class Car extends React.Component {

    constructor(props) {
        super(props); //temel sınıfa props parametresi gonderilmeli
        this.changeColor = this.changeColor.bind(this);

        this.state = {
            brand: 'Opel',
            model: 'Astra',
            color: 'red',
            year: 2020
        }
    }

    changeColor() {// fonksiyon çağırıldığında render metodunu çağırmadan sayfada ilgili alan değiştirilir.
        this.setState({ // bu şekilde kullanılıyor
            color: 'blue',
            model: 'Corsa'
        });
    }
 
    render() {
        return (
            <div>
                <h1>{this.state.brand} {this.state.model}</h1>
                <p>selected color: {this.state.color}</p>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        );
    };
}

ReactDOM.render(<Car />, document.getElementById('root'));