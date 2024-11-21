import { createContact, getAllContacts, getContactById } from "../services/contacts";
import createHttpError from 'http-errors';

export async function getContactsController  (req, res, next)  {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  };

  export async function getContactController (req, res, next)  {
    try {
      const { contactId } = req.params;
      const contact = await getContactById(contactId);

      if (!contact) {
        next (createHttpError(404, 'Route not found'));
      }

      res.status(200).json({
        status: 200,
        message: `Successfully found contact with id=${contactId}!`,
        data: contact,
      });
    } catch (error) {
      if (error.message.includes('Cast to ObjectId')) {
        error.status = 404;
      }
      const { status = 500 } = error;
      res.status(status).json({ message: error.message });
    }
};

export const createContactController = async (req, res) => {
  const contact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};
