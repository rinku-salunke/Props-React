function Home(props){
    return<>
    <div>
    <h1>Home is react functional component</h1>
    <h1>Rollno:{props.rollno}</h1>
    <h2>Name:{props.name}</h2>
    <h3>Address:{props.address}</h3>
    </div>
    </>
}

export default Home;

