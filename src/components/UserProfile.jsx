import React, { useState } from 'react';
import { Avatar, Paper, Typography, Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Nicholas Senyo Klu',
    email: 'nicholas@example.com',
    phone: '+233 245 678 910',
    bio: 'I am a software developer specializing in building web applications.',
  });

  const [editData, setEditData] = useState({ ...user });

  // Toggle between edit and view mode
  const handleEditClick = () => setIsEditing(!isEditing);

  // Handle form input changes
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  // Save the edited profile data
  const handleSaveClick = () => {
    setUser({ ...editData });
    setIsEditing(false);
  };

  return (
    <Paper sx={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <Avatar
        src="https://via.placeholder.com/150"
        alt={user.name}
        sx={{ width: 150, height: 150, margin: 'auto' }}
      />
      {isEditing ? (
        <div>
          <TextField
            label="Name"
            name="name"
            value={editData.name}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            value={editData.email}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Phone"
            name="phone"
            value={editData.phone}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Bio"
            name="bio"
            value={editData.bio}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleSaveClick}
          >
            Save Profile
          </Button>
        </div>
      ) : (
        <div>
          <Typography variant="h4" sx={{ marginTop: 2 }}>
            {user.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {user.email}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {user.phone}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            {user.bio}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<EditIcon />}
            sx={{ marginTop: 2 }}
            onClick={handleEditClick}
          >
            Edit Profile
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default UserProfile;
