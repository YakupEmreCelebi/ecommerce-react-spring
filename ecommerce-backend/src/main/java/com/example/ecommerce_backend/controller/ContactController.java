package com.example.ecommerce_backend.controller;

import com.example.ecommerce_backend.dto.ContactDto;
import com.example.ecommerce_backend.service.IContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/contacts")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ContactController {

    private final IContactService contactService;

    @PostMapping
    public ResponseEntity<ContactDto> create(@RequestBody ContactDto contactDto) {
        boolean isSaved = contactService.saveContact(contactDto);
        return isSaved ? ResponseEntity.ok().body(contactDto) : ResponseEntity.badRequest().build();
    }
}
