package com.web.gdup.domain.cody.repository;

import com.web.gdup.domain.cody.dto.CodyDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CodyRepository extends JpaRepository<CodyDto, Long> {
 List<CodyDto> findAllByUserName(String id);
}
