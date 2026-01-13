package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.dto.ContactDto;
import com.example.ecommerce_backend.entity.Contact;
import com.example.ecommerce_backend.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class ContactServiceImp implements IContactService {

    private final ContactRepository contactRepository;

    @Override
    public boolean saveContact(ContactDto contactDto) {

        Contact contact = dtoToEntity(contactDto);
        contactRepository.save(contact);
        return true;
    }

    private Contact dtoToEntity(ContactDto contactDto) {
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactDto, contact);
        contact.setCreatedAt(Instant.now());
        contact.setCreatedBy(contactDto.getName());


        return contact;
    }
}
