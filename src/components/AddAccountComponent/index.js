import React,{useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { setSecretKeyUserData, clearImageData } from '../../redux/Actions/SecretKeyActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddAccountInputFields from './AddAccountInputFields'
const AddAccountComponent = (props) => {
  const {ImageData} =props;
    const {navigate} = useNavigation();
    const [form, setForm] = useState({})
    const [error,setError] = useState({})
    const onChange = ({name,value}) =>{
        setForm({...form,[name]:value})
        if(value !==''){
            if(name==='secret_key'){
              if(!value.match(/^[A-Z2-7]+=*$/)){
                // /^([a-z0-9]{5,})$/

                setError((prev)=>({...prev, secret_key:"The Secret key must be base32"}))
                return;
              }
              else{

                setError((prev)=>({...prev,[name]:null}))
              }
            }
            setError((prev)=>({...prev,[name]:null}))

        }
        else{
            setError((prev)=>({...prev, [name]:"This field is required"}))
        }
    }
    const onSubmit = () =>{
        if(!form.secret_key){
            setError((prev)=>({...prev, secret_key:"Please Provide Secret Code"}))
        }
        if(!form.application_name){
          setError((prev)=>({...prev, application_name:"Please Provide Application Name"}))
        }
        if(!form.company_name){
          setError((prev)=>({...prev, company_name:"Please Provide Company Name"}))
        }
        // props.setSecretKeyUserData(form)
        if(form.secret_key == null || !form.secret_key.match(/^[A-Z2-7]+=*$/))return
        if(form.application_name == null) return
        if(form.company_name == null) return
        // secreteDispatch(setSecreteCode(form.secretCode));
        props.setSecretKeyUserData(form)
        setForm({})
        setError({})
        navigate("Home")
    }
    useEffect(()=>{
      if(ImageData.length>0){
        const {application_name,image} =ImageData[0]
        const keys = Object.keys(ImageData[0]);
        setForm({...form,[keys[0]]:application_name,[keys[1]]:image})
      }
    },[ImageData])
    useEffect(()=>{
      setForm({})
      setError({})
    },[])

  return (
      <>
    <AddAccountInputFields 
        form = {form}
        error = {error}
        onSubmit = {onSubmit}
        onChange = {onChange}
    />
    </>
  )
}
const mapDispatchToProps = dispatch =>({
  ...bindActionCreators({setSecretKeyUserData, clearImageData},dispatch)
})
const mapStateToProps = state =>({
  ImageData:state.secreteData.userImageData
})
export default connect(mapStateToProps, mapDispatchToProps)(AddAccountComponent)