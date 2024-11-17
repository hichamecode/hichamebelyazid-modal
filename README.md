#  **hichamebelyazid_modal**
---
## Introduction
---
This project provides a _simple_ and _lightweight_ solution for handling your modals in React
## Table of Contents
---
1. [Introduction](#introduction)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Examples](#examples)
6. [License](#license)
7. [Author](#author)

##  Installation
---
To install the package using NPM:
- type the code below
OR
- copy & paste it

_note_: my name is tricky :sweat_smile: beware of typos!

```bash
npm  install  hichamebelyazid-modal
```
I recommand using the Roboto Font as it is free. Also, it aligns perfectly with the Material Design principles.

To do so, please embed this code in the `<head>` of your html file

```bash
<link rel="preconnect"  href="https://fonts.googleapis.com">
<link rel="preconnect"  href="https://fonts.gstatic.com"  crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"  rel="stylesheet">
```

## Usage
---
After the installation, you can start by importing the Modal component and the ClosingButton component, each with their own CSS styles. 

- **Imports**
```bash 
// components
import { Modal } from 'hichamebelyazid-modal';
import { ClosingButton } from 'hichamebelyazid-modal';
// styles
import  "./Modal.css";
import  './ClosingButton.css';
```
- **Props**

The `Modal` component expects the following props:

-    **`modalTitle`** (`string`): The title displayed at the top of the modal.

-   **`modalText`** (`string`): The text content that appears inside the modal.

-   **`onClose`** (`function`): A function that closes the modal.

The `ClosingButton` component expects the following props:

-   **`onClick`** (`function`): A function that will close the modal.
-   **`closingButtonText`** (`string`): The text to be displayed on the button.

-  **Accessibility**

  The modal has the `role="dialog"` and `aria-modal="true"` attributes for screen reader accessibility.
 Users can close the modal by pressing the **Escape** or **Enter** key, which is handled by the `handleKeyDown` function.

## Examples
---
```bash
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className='test-button' onClick={handleOpenModal}>CLICK TO TEST THE MODAL</button>
      {isModalOpen && (
        <Modal
          modalTitle="EMPLOYEE CREATED"
          modalText="you can now access the employee in the list"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
```

## License
---
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  
Feel free to use it and contribute to this library.

## Author
---
- **Hichame Belyazid** ([GitHub Profile](https://github.com/hichamecode/))

