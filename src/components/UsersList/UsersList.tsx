import React, { useState } from "react";
import { UsersListProps } from "./UsersListProps";
import User from "../User/User";
import { UserType } from "../../models/userType";
import Modal from "../UI/Modal/Modal";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import Alert from "../UI/Alert/Alert";

const UsersList = ({ filter }: UsersListProps) => {
  const [viewModal, setViewModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const { users, error, loading } = useAppSelector((state) => state.users);

  if (loading) {
    return <Alert type="loading">Loading...</Alert>;
  }

  if (error) {
    return <Alert type="error">{error}</Alert>;
  }

  const getFilteredUsers = () => {
    return users.filter(
      (user: UserType) =>
        user.name.includes(filter) ||
        user.username.includes(filter) ||
        user.email.includes(filter)
    );
  };

  return (
    <>
      {getFilteredUsers().length ? (
        getFilteredUsers().map((user: UserType) => (
          <User
            key={`${user.id}-${user.username}`}
            user={user}
            filter={filter}
            onClick={() => {
              setViewModal(true);
              setSelectedUser(user);
            }}
          />
        ))
      ) : (
        <Alert type="warning">Users Not Found!</Alert>
      )}
      <Modal visible={viewModal} setVisible={setViewModal} title="User Info:">
        {selectedUser && (
          <div>
            <strong>Address:</strong>{" "}
            {`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}
            <br />
            <strong>Company:</strong> {selectedUser.company.name}
          </div>
        )}
      </Modal>
    </>
  );
};

export default UsersList;
