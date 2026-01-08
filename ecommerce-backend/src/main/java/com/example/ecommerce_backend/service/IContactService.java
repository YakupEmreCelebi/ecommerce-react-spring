package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.dto.ContactDto;

public interface IContactService {

    boolean saveContact(ContactDto contactDto);
}
