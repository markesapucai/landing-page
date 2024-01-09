const Home = () => {
 /*const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:5000');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts();
  }, [])
*/
  return (
    <div className="home">
      <h1>Está é a homePage</h1>
    </div>
  )
}

export default Home;