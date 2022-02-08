package com.web.gdup.domain.cody.controller;

import com.web.gdup.domain.cody.dto.CreateCody;
import com.web.gdup.domain.cody.entity.CodyEntity;
import com.web.gdup.domain.cody.service.CodyServiceImpl;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = {"http://i6b108.p.ssafy.io:3000"})
@RestController
@RequestMapping("/cody")
public class CodyController {

    @Autowired
    private CodyServiceImpl cs;

    @PostMapping(value = "/create")
    @ApiOperation(
            value = "코디 추가",
            notes = "유저의 모든 코디 목록을 보내준다."
    )
    public ResponseEntity<String> createCody(@RequestPart(value = "imageFile") MultipartFile file, @RequestPart( value = "createCody") CreateCody cc) {
        ResponseEntity<String> re;

        System.out.println(cc.toString());
        System.out.println(file.getOriginalFilename());

        if (cs.addCodyItem(cc, file) == 1)
            re = new ResponseEntity<>("Cody 생성 성공", HttpStatus.OK);
        else
            re = new ResponseEntity<>("Cody 생성 실패", HttpStatus.BAD_REQUEST);
        re = new ResponseEntity<>("Cody 생성 성공", HttpStatus.OK);
        return re;
    }



    @PutMapping(value = "/update/{userName}/{codyId}")
    @ApiOperation(
            value = "코디 수정",
            notes = "cody_id를 받아서 해당 코디를 수정합니다."
    )
    public ResponseEntity<String> updateCody(@PathVariable(name = "codyId") String codyId, @PathVariable(name = "userName") String userId, @RequestBody CreateCody cc) {

        return new ResponseEntity<String>("수정 성공", HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{codyId}")
    @ApiOperation(
            value = "코디 삭제",
            notes = "cody_id를 받아서 해당 코디를 삭제 합니다."
    )
    public ResponseEntity<String> deleteCody(@PathVariable(name = "codyId") int cody_id) {
        return new ResponseEntity<String>("코디 삭제" + cs.deleteCodyItem(cody_id), HttpStatus.OK);
    }

    @GetMapping(value = "/read/{userId}")
    @ApiOperation(
            value = "코디 목록 불러오기",
            notes = "특정 유저의 코디 목록 불러오기"
    )
    public ResponseEntity<List<CodyEntity>> readCodyList(@PathVariable(name = "userId") String id) {
        return new ResponseEntity<List<CodyEntity>>(cs.getUserCodyList(id), HttpStatus.OK);
    }

}
