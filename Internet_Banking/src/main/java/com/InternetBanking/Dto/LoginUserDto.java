package com.InternetBanking.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginUserDto {

	private String userName;

	private String password;

}
