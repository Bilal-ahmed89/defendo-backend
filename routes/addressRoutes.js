import express, { Router } from 'express'
import { getAddressbyId, addAddress, deleteAddress, editAddress } from '../controllers/addressController';

const route = express.Router();

Router.route('/account/address/new').post(addAddress);

Router.route('/account/address/:id').get(getAddressbyId);

Router.route('/account/address/delete/:id').delete(deleteAddress);

Router.route('/account/address/update/:id').put(editAddress);