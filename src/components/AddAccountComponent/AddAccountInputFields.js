import React from 'react'
import Input from '../common/input'
import CustomButton from '../common/CustomButton'
import Container from '../common/container/Container'
import CustomModal from '../CustomModal'
const AddAccountInputFields = ({onChange,onSubmit, form , error}) => {
  return (
    <Container>
      <Input
        placeholder = "Enter Your Secret Key"
        label="Secret Key"
        onChangeText={(value)=>onChange({name:'secret_key',value})}
        error = {error.secret_key}
        value = {form.secret_key}
        />
      <Input
        placeholder = "Enter Your Application Name"
        label="Application Name"
        onChangeText={(value)=>onChange({name:'application_name',value})}
        error = {error.application_name}
        value = {form.application_name}
        />
      <Input
        placeholder = "Enter Your Company Name"
        label="Company Name"
        onChangeText={(value)=>onChange({name:'company_name',value})}
        error = {error.company_name}
        value = {form.company_name}
        />
        <CustomModal/>
        <CustomButton primary title = "Submit" onPress={onSubmit}/>
    </Container>
  )
}

export default AddAccountInputFields