import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addListTask } from "../thunks/list.thunk";
import { ITask } from "../store/list.store";

export const AddTaskModal = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskName, setTaskName] = useState("");

  const onInputChange = ({ target }) => {
    setTaskName(target.value.trim());
  };

  const openModal = () => {
    setTaskName("");
    onOpen();
  };

  const saveTask = () => {
    const task: ITask = {
      name: taskName,
      avatar: "https://via.placeholder.com/150",
      createdAt: new Date().toISOString(),
      id: Math.random().toString(),
    };
    dispatch(addListTask([task]));
    onClose();
  };

  return (
    <>
      <Button
        data-testid="btn-add-task"
        mb="12px"
        onClick={openModal}
        colorScheme="teal"
      >
        Add task
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent data-testid="modal-add">
          <ModalHeader>Create Task </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                data-testid="input-task-name"
                colorScheme="teal"
                placeholder="Task name"
                onChange={onInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              data-testid="btn-save-task"
              onClick={saveTask}
              isDisabled={!taskName}
              colorScheme="teal"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
