import React, { useState, useEffect } from 'react';
import { Table } from '@nextui-org/react';
import { withUser } from '@clerk/nextjs';

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
    setTableTitle(array.city); // Update the table title when a new array is selected

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

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <h1>{tableTitle}</h1> {/* Render the dynamic title */}
            {postData ? (
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
      {(selectedArray ? selectedArray.galleryImg : postData[0]?.galleryImg || []).map((item) => (
        <Table.Row
          key={item.id}
          onClick={() => handleRowClick(item)}
          selected={findRowById(item.id) !== null}
        >
          <Table.Cell>{item.id}</Table.Cell>
          <Table.Cell>{item.url}</Table.Cell>
          <Table.Cell>{item.title}</Table.Cell>
          <Table.Cell>
            <img
              src={item.url}
              alt={item.title}
              className="object-cover w-10 h-10 rounded"
            />
          </Table.Cell>
          <Table.Cell>
            <a href={`https://feed.unlimitpotential.com/edit/${item.id}`} className="mr-2">
              Edit
            </a>
            <button onClick={() => deleteRow(item.id)}>Delete</button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
    {postData && (
      <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={3}
        onPageChange={(page) => console.log({ page })}
      />
    )}
  </Table>
) : (
  <div className="bg-white rounded-lg shadow-md p-8">
    <h2 className="text-2xl font-medium mb-4">No data available</h2>
    <p className="text-gray-500">Please add some posts.</p>
    <a
      href="https://workspace.unlimitpotential.com/create-space"
      className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
        />
      </svg>
      <span className="mt-2 block text-sm font-medium text-gray-900">Quick Launch</span>
    </a>
  </div>
)}
      {postData && postData.map((item) => (
        <p
          key={item.name}
          onClick={() => handleArraySelect(item)}
          style={{ cursor: 'pointer' }}
        >
          Preview collection
        </p>
      ))}
      {selectedImage ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{selectedImage.title}</h3>
            <p className="text-gray-500">Likes: {selectedImage.likes}</p>
            <p className="text-gray-500">Views: {selectedImage.views}</p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Blank card */}
          <div className="w-full h-48" />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">No image selected</h3>
            <p className="text-gray-500">Please select an image from the table</p>
          </div>
        </div>
      )}
    </div>
    
  );
}

export default withUser(Greeting);
