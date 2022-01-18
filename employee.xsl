<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">


        <!-- TODO: Auto-generated template -->
        <html>
            <head></head>
            <body>
                <h1 style="text-align:center">EMPLOYEE DETAILS</h1>
                <table border="2" align="center">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                        <th>ADDRESS</th>
                        <th>EMAIL-ID</th>
                        <th>DESIGNATION</th>
                        <th>SPECIFICATION</th>
                        <th>YEAR-OF-EXPERINCE</th>
                        <th>SALARY</th>
                    </tr>
                    <xsl:for-each select="Employee/emp">
                        <xsl:sort select="name" case-order="upper-first" />
                        <xsl:if test="salary>=100000">
                            <tr>
                                <td>
                                    <xsl:value-of select="emp-id" />
                                </td>
                                <td>

                                    <xsl:value-of select="name" />
                                </td>
                                <td>
                                    <xsl:value-of select="age" />
                                </td>
                                <td>
                                    <xsl:value-of select="gender" />
                                </td>
                                <td>
                                    <xsl:value-of select="address" />
                                </td>
                                <td>
                                    <xsl:value-of select="emailid" />
                                </td>
                                <td>
                                    <xsl:value-of select="designation" />
                                </td>
                                <td>
                                    <xsl:value-of select="specification" />
                                </td>
                                <td>
                                    <xsl:value-of select="yearofexperince" />
                                </td>
                                <td>
                                    <xsl:value-of select="salary" />
                                </td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>