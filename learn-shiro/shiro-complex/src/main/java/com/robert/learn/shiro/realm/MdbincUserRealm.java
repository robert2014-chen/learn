package com.robert.learn.shiro.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

/**
 * 
 * 
 * @Description mdbinc系统用户的验证与授权
 * 
 * @author robert.qiang.chen@gmail.com
 * 
 * @time 2017年6月2日 上午9:08:17
 */
public class MdbincUserRealm extends AuthorizingRealm {

	//授权，即获取当前用户的权限
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * 验证，即验证用户是否为系统用户
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken arg0) throws AuthenticationException {
		
		return null;
	}

}
