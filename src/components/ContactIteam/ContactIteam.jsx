import PropTypes from 'prop-types';
import { Items, ItemButton } from './ContactIteam.styled';

const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <Items key={id}>
        {name}: {number}
        <ItemButton type="button" onClick={() => onDeleteContact(id, name)}>
          Delete
        </ItemButton>
      </Items>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;