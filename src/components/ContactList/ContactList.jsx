import { Item, ButtonClose, Contact } from './ContactList.styled';
import {PropTypes} from 'prop-types'

const ContactList = ({ contacts, onDeleteContact }) => (
	<ul>
		{contacts.map(({ id, name, number }) => {
			return (
				<Item key={id}>
					<Contact>
						{name}: {number}
					</Contact>
					<ButtonClose type="button" onClick={()=> onDeleteContact(id)}>x</ButtonClose>
				</Item>
			);
		})}
	</ul>
);



export default ContactList;

ContactList.propTypes = {
	name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
}