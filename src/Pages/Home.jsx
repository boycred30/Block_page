import React, {useEffect,useState} from 'react'
import { getDocs,collection, deleteDoc, doc } from 'firebase/firestore'
import { db,auth,  } from '../Firebase/Firebase-config'
const Home = ({isAuth}) => {
  // USESTATE IS USE TO STORE DATE 
  const [postText, setpostText] = useState ([]);
  //creating a collection in our database
  const postCollectionRef = collection(db, "ALLpost")
  useEffect(()=>{
    try{
     const getPost = async ()=>{
      const data = await getDocs (postCollectionRef)
      setpostText(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
     }
    }catch (error) {
      console.log(error)
    } 

  }, [])

 
  return (
    <div>
      
    </div>
  )
}

export default Home
