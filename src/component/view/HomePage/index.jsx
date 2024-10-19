
import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Drawer, FormControl, Grid, List, ListItemButton, Typography } from '@mui/material'
// ==== GET DATA
import jsonData from "../../../assets/form.json"

// ==== CUSTOM COMPONENT
import PrimaryTextField from '../../../common/MuiTextField'
import PrimaryTextArea from '../../../common/MuiTextFieldMultiple'
import PrimaryRadioButtons from '../../../common/MuiRadio'
import PrimaryDropDown from '../../../common/MuiAutoComplete'
import PrimaryCheckBox from '../../../common/MuiCheckBox'
import PrimarySlider from '../../../common/MuiSlider'
// ==== THIRD PARTY
import _ from "lodash"
import { Controller, useForm } from 'react-hook-form'
import ReorderIcon from '@mui/icons-material/Reorder';
import { Close } from '@mui/icons-material'

const HomePage = () => {
  // ====== LOCAL STATE =========
  const [showList, setShowList] = useState(0)
  const [defaultValue, setDefaultValue] = useState({})
  const [open, setOpen] = useState(false);


  // === USE FROM
  const {
    register,
    handleSubmit,
    control,
    reset,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({ defaultValue })


  // ======== HANDLE SUBMIT FUNCTION ========
  const onSubmit = (values) => {
    const getStoredData = JSON.parse(localStorage.getItem("data"))
    const storedData = { ...(getStoredData ? getStoredData : {}), [showList]: values }
    localStorage.setItem("data", JSON.stringify(storedData))
    reset();
  }


  // === COMPOENTDIDMOUNT ========
  useEffect(() => {
    const data = jsonData?.form?.groups[showList].fields
    let keyName = {}

    data?.map((v) => {
      keyName = { ...keyName, [v.name]: undefined }
    })
    setDefaultValue(keyName)

  }, [showList])

  const openDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <Box m={0} p={0}>

      {/* ========= SIDEBAR  ========= */}
      <Box display={{ xs: "block", sm: "none" }} ml={3} mt={2} onClick={() => setOpen(true)}>
        <ReorderIcon />
      </Box>
      <Grid container gap={0} spacing={0} >
        <Grid item xs={0} sm={3}>

          {/* ========= DESKTOP VIEW ========= */}
          <Box
            display={{ xs: "none", sm: "block" }}
            sx={{
              boxShadow: "1px 0px 5px black",
              minHeight: "100vh",
              padding: "50px 10px 0px"
            }}>
            <Box>

              <Typography variant='h6'>
                {jsonData.form.title}
              </Typography>
              <List component="nav" >
                {_.map(jsonData?.form?.groups, (value, index) => {
                  return (
                    <ListItemButton selected={index === showList} onClick={() => {
                      reset()
                      resetField()
                      setShowList(index)
                    }} key={index} sx={{ py: 2 }}>
                      <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                        {value?.title}
                      </Typography>
                    </ListItemButton>
                  )
                })}
              </List>
            </Box>
          </Box>


          {/* ========= MOBILE VIEW ========= */}
          <Drawer open={open} sx={{ "& .MuiPaper-root ": { minWidth: "180px", padding: "10px 15px" } }} onClose={openDrawer(false)}>
            <Box display={"flex"} justifyContent={"end"} mb={2} onClick={openDrawer(false)}>
              <Close />
            </Box>

            <List component="nav" >
              {_.map(jsonData?.form?.groups, (value, index) => {
                return (
                  <ListItemButton onClick={() => {
                    reset()
                    openDrawer(false)
                    resetField()
                    setShowList(index)
                  }} key={index} sx={{ py: 2 }}>
                    <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>

                      {value?.title}
                    </Typography>
                  </ListItemButton>
                )
              })
              }
            </List>
          </Drawer>

        </Grid>

        <Grid item xs={12} sm={8} ml={3}>
          <Container sx={{ pt: 5 }}>


            {/* ====== ACTIVE TAB TITLE  ======  */}
            <Typography fontSize={"32px"} fontWeight={500} sx={{ width: "100%" }}>
              {jsonData?.form?.groups[showList].title}
              {console.log("jsonData?.form?.groups[showList].fields", jsonData?.form?.groups[showList].fields)}
            </Typography>


            <form onSubmit={handleSubmit(onSubmit)}>
              {_.map(jsonData?.form?.groups[showList].fields, (value, index) => {

                // ======= SET VALUE ==========
                if (value?.default) {
                  setValue(`${value.name}`, value?.default);
                }
                return (
                  <Box my={1} width={"100%"} key={index}>

                    <FormControl sx={{ marginY: "10px", width: "100%" }}>


                      {/* ======= TEXT FILED ======= */}
                      {value.type === "text" &&
                        <PrimaryTextField
                          inputRef={register(value.name, { ...(value.required ? { required: "Please fill field" } : {}) })}
                          error={!!errors[value.name]}
                          helperText={errors[value.name] ? errors[value.name].message : ""}
                          id={value.name} name={value.name}
                          placeholder={value.placeholder}
                          label={value.label}
                        />
                      }

                      {/* ======= NUMBER INPUT ======= */}
                      {value.type === "number" &&
                        <PrimaryTextField
                          inputRef={register(value.name, {
                            ...(value.required ? { required: "Please fill field" } : {}),
                            min: { value: value.min, message: `Please Add Value more than ${value.min}` },
                            max: { value: value.max, message: `Please Add Value less than ${value.max}` }
                          })}
                          id={value.name}
                          name={value.name}
                          placeholder={value.placeholder}
                          error={!!errors[value.name]} s
                          helperText={errors[value.name] ? errors[value.name].message : ""}
                          type={'number'}
                          min={value.min}
                          max={value.max}
                          label={value.label}
                        />
                      }

                      {/* ======= MULTIPLE LINE FILED ======= */}
                      {
                        value.type === "textarea" &&
                        <PrimaryTextArea
                          inputRef={register(value.name, { ...(value.required ? { required: "Please fill field" } : {}) })}
                          error={!!errors[value.name]}
                          helperText={errors[value.name] ? errors[value.name].message : ""}
                          id={value.name}
                          name={value.name}
                          placeholder={value.placeholder}
                          label={value.label}
                        />
                      }

                      {/* ======= RADIO OPTIONS ======= */}
                      {value.type === "radio" &&
                        <PrimaryRadioButtons
                          options={value.options}
                          inputRef={register(value.name, { ...(value.required ? { required: "Please Select atleast one field" } : {}) })}
                          error={!!errors[value.name]}
                          helperText={errors[value.name] ? errors[value.name].message : ""}
                          title={value.label}
                          id={value.name}
                          required={value.required}
                        />
                      }

                      {/* ======= DROP DOWN OPTIONS ======= */}
                      {value.type === "dropdown" &&
                        <Controller
                          control={control}
                          name={value.name}
                          render={({ field }) => (
                            <PrimaryDropDown
                              title={value.label}
                              inputRef={register(value.name, { ...(value.required ? { required: "Please Select atleast one field" } : {}) })}
                              id={value.name}
                              error={!!errors[value.name]}
                              helperText={errors[value.name] ? errors[value.name].message : ""}
                              options={value.options}
                              onChange={(event, item) => {
                                field.onChange(item);
                              }}
                              value={field.value || null}
                            />
                          )}
                        />
                      }

                      {/* ======= CHECKBOX ======= */}
                      {value.type === "checkbox" && <PrimaryCheckBox
                        inputRef={register(value.name, { ...(value.required ? { required: "Please Select atleast one field" } : {}) })}
                        register={register}
                        error={!!errors[value.name]}
                        helperText={errors[value.name] ? errors[value.name].message : ""}
                        options={value.options}
                        title={value.label}
                        id={value.name}
                        name={value.name}
                        required={value.required}
                      />}


                      {/* ======= SLIDER ======== */}
                      {value.type === "slider" &&
                        <Controller
                          control={control}
                          name={value.name}
                          defaultValue={value.defaultValue}
                          render={({ field }) => (
                            <PrimarySlider
                              title={value.label}
                              name={value.name}
                              min={value.min}
                              max={value.max}
                              step={value.step}
                              onChange={(element) => {
                                console.log("change is ", element.target.value)
                                field.onChange(element.target.value)
                              }}
                              error={!!errors[value.name]}
                              helperText={errors[value.name] ? errors[value.name].message : ""}
                            />
                          )}
                          rules={{ ...(value.required ? { required: { value: true, message: 'This field is required' } } : {}) }}
                        />
                      }
                    </FormControl>
                  </Box>
                )
              })
              }

              {/* ======= SUBMIT FORM BUTTON ========  */}
              <Button variant='contained' type='submit' sx={{ width: "100%" }}>Submit</Button>
            </form>
          </Container>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage