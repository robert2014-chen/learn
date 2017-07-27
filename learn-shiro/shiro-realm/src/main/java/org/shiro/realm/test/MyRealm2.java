/**
 * 
 */
package org.shiro.realm.test;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.realm.Realm;

/**
 * 
 * @Description
 * 
 * @author robert.qiang.chen@gmail.com
 * 
 * @time 2017年7月10日 下午2:05:20
 */
public class MyRealm2 implements Realm {

	/* (non-Javadoc)
	 * @see org.apache.shiro.realm.Realm#getName()
	 */
	@Override
	public String getName() {
		return "b"; //realm name 为 “a”
	}

	/* (non-Javadoc)
	 * @see org.apache.shiro.realm.Realm#supports(org.apache.shiro.authc.AuthenticationToken)
	 */
	@Override
	public boolean supports(AuthenticationToken token) {
		// TODO Auto-generated method stub
		return false;
	}

	/* (non-Javadoc)
	 * @see org.apache.shiro.realm.Realm#getAuthenticationInfo(org.apache.shiro.authc.AuthenticationToken)
	 */
	@Override
	public AuthenticationInfo getAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		return new SimpleAuthenticationInfo(
				"zhang", //身份 字符串类型
				"123", //凭据
				getName() //Realm Name
				);
	}

}
