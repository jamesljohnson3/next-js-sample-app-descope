import React, { useState, useEffect } from 'react';
import { Table } from '@nextui-org/react';
import { withUser } from '@clerk/nextjs';
import {
	Button, ButtonGroup, Spacer, Text
  } from '@chakra-ui/react'
  import { Field, FormLayout} from '@saas-ui/react'

  import {
    StepForm,
    FormStep,
    NextButton,
  } from '@saas-ui/react'
  import { EmptyState } from '@saas-ui/react'
  import { FormStepper, FormValue, Loader, ModalsProvider, PrevButton, Property, PropertyList, StepperCompleted, useModals } from '@saas-ui/react'
  import { useSnackbar } from '@saas-ui/react'


function Greeting({ user }) {
  const [selectedArray, setSelectedArray] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [tableTitle, setTableTitle] = useState('');

  useEffect(() => {
    if (selectedArray && selectedArray.galleryImg.length > 0 && !selectedImage) {
      setSelectedImage(selectedArray.galleryImg[0]);
    }
  }, [selectedArray, selectedImage]);

  const handleArraySelect = (array) => {
    setSelectedArray(array);
    setSelectedImage(null);
    setTableTitle(array.name); // Update the table title when a new array is selected

  };

  const handleRowClick = (row) => {
    setSelectedImage(row);
  };

  const findRowById = (id) => {
    const selectedRow = selectedArray ? selectedArray.galleryImg.find((row) => row.id === id) : null;
    return selectedRow || null;
  };

  let postData;
  if (user && user.unsafeMetadata) {
    postData = user.unsafeMetadata.galleryImgs;
  }

  console.log('postData:', postData);

  const deleteRow = async (id) => {
    try {
      const response = await fetch(`/api/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Row deleted successfully, update the UI or fetch new data
      } else {
        console.error('Failed to delete row:', response.status);
      }
    } catch (error) {
      console.error('Failed to delete row:', error);
    }
  };
  const onSubmit = async (params) => {
    console.log(params);
    try {
      const webhookResp = await fetch('https://hook.us1.make.com/e727pmawescz23ls88greva6s24l9yma', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params), // Convert params to JSON string
      });
  
      const webhookData = await webhookResp.json();
      console.log(webhookData);
  
      if (webhookData.link) {
        window.location.href = webhookData.link;
      }
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };
  
  
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <h1>{tableTitle}</h1> {/* Render the dynamic title */}

      <Table
        bordered
        shadow={false}
        color="secondary"
        aria-label="Example pagination table"
        css={{
          height: 'auto',
          minWidth: '100%',
        }}
        selectionMode="multiple"
      >
        <Table.Header>
          <Table.Column>ID</Table.Column>
          <Table.Column>URL</Table.Column>
          <Table.Column>Title</Table.Column>
          <Table.Column>Thumbnail</Table.Column>
          <Table.Column>Actions</Table.Column>
        </Table.Header>
        <Table.Body>
          
        </Table.Body>
    
      </Table>
      {postData && postData.map((item) => (
        <><a
        href="https://spaces.unlimitpotential.com/edit-testing"
          key={item.name}
          style={{ cursor: 'pointer' }}
        >
        🧠 {item.city} - {item.name}
        </a>
         <StepForm
        defaultValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        <FormLayout>
          <FormStepper>
            <FormStep name="project" title="Create">
              <FormLayout>
                <Field
                  name="name"
                  isRequired
                  placeholder="Your Asset ID"
                  label="Your tracking Id auto-generated"
                  value={item.age} // Set the value prop to {item.age}
                />Copy
                <Field name="description" label="Enter custom slug or leave blank" placeholder="yoururl.com/custom-slug" />
              </FormLayout>
            </FormStep>
            <FormStep name="members" title="Share">
              <FormLayout>
                <Field
                  name="members"
                  type="textarea"
                  label="Invite people"
                  placeholder="hello@saas-ui.dev, etc"
                  autoFocus
                />
              </FormLayout>
            </FormStep>
            <FormStep name="confirm" title="Manage">
              <FormLayout>
                <Text>Please confirm that your information is correct.</Text>
                <PropertyList>
                  <Property label="FormId #" value={<FormValue name="name" />} />
                  <Property label="Description" value={<FormValue name="description" />} />
                </PropertyList>
              </FormLayout>
            </FormStep>

            <StepperCompleted>
              <Loader>We are setting up your project, just a moment...</Loader>
            </StepperCompleted>
          </FormStepper>
          <ButtonGroup w="full">
            <PrevButton variant="ghost" />
            <Spacer />
            <NextButton />
          </ButtonGroup>
        </FormLayout>
      </StepForm></>
      ))}
      
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/unlimitpotential/image/upload/v1682803495/29cc522d-4d91-4fc3-a0b8-3c8d1eafab5e_606c8e791bef161df00079d3_Web_1366_27_2x-p-800_png_r28t9t.png"
            className="object-cover w-full h-48"
          />
         
        </div>
    
    </div>
    
  );
}

export default withUser(Greeting);
